<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStoreRequest;
use App\Http\Requests\UpdateStoreRequest;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'user_id' => 'sometimes|required|integer|exists:users,id',
        ]);
        $query = Store::query();

        if ($request->filled('user_id')) {
            $query->where('user_id', $request->integer('user_id'));
        }

        return response()->json($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStoreRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();

        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('stores', 'public');
            $data['cover_image'] = $path;
        }

        $store = Store::create($data);

        return response()->json($store, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Store $store)
    {
        return response()->json($store->with(['user', 'service', 'comment']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStoreRequest $request, Store $store)
    {
        $data = $request->validated();

        if ($request->hasFile('cover_image')) {
            if ($store->cover_image) {
                Storage::disk('public')->delete($store->cover_image);
            }

            $path = $request->file('cover_image')->store('stores', 'public');
            $data['cover_image'] = $path;
        }
        $store->update($data);

        return response()->json($store);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store)
    {
        if (Auth::id() !== $store->user_id) {
            return response()->json(['msg' => 'Unauthorized'], 403);
        }

        if ($store->cover_image) {
            Storage::disk('public')->delete($store->cover_image);
        }

        $store->delete();

        return response()->json(['msg' => 'Deleted']);
    }
}
