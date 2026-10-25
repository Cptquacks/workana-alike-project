<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticateUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (! Auth::check()) {
            return response()->json(['msg' => 'Unauthorized'], 401);
        }

        return response()->json(User::all(['id', 'name']));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();

        $user = User::create($data);
        Auth::login($user, remember: true);
        $request->session()->regenerate();

        return response()->json($user, 201);
    }

    /**
     * Athenticates the specified resource
     */
    public function authenticate(AuthenticateUserRequest $request)
    {
        $data = $request->validated();

        if (Auth::attempt($data, remember: true)) {
            $user = Auth::user();
            $request->session()->regenerate();

            return response()->json($user);
        }

        return response()->json([
            'error' => 'Invalid credentials',
        ], status: 401);
    }

    /**
     * Logs out the specified resource
     */
    public function logout(Request $request)
    {
        if (! Auth::check()) {
            return response()->json([
                'error' => 'Not logged in',
            ], status: 400);
        }

        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'msg' => 'bye TwT',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, int $id)
    {
        $user = User::findOrFail($id);

        if ($id === Auth::id()) {
            return response()->json($user);
        }

        return response()->json($user->only(['id', 'name']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, int $id)
    {
        $data = $request->validated();

        $user = User::findOrFail($id);
        $user->update($data);

        return response()->json(
            data: $user
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        if (Auth::id() !== $id) {
            return response()->json([
                'error' => 'Cannot delete other users',
            ], status: 403);
        }

        User::findOrFail($id)->delete();

        return response()->json(['msg' => 'Deleted']);
    }
}
