<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Service;
use App\Models\Store;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Store $store)
    {
        $services = $store->services;

        return response()->json($services);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request, Store $store)
    {
        $data = $request->validated();

        $data['store_id'] = $store->id;

        $service = Service::create($data);

        return response()->json($service, 201);
    }

    /**
     * Shows the specified resource in storage.
     */
    public function show(Store $store, Service $service)
    {
        if ($service->store_id !== $store->id) {
            abort(404);
        }

        return response()->json($service);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Store $store, Service $service)
    {
        if ($service->store_id !== $store->id) {
            abort(404);
        }

        $data = $request->validated();

        $service->update($data);

        return response()->json($service);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store, Service $service)
    {
        if (Auth::id() !== $store->user_id) {
            return response()->json(['msg' => 'Unauthorized'], 403);
        }

        if ($store->id !== $service->store_id) {
            return response()->json(['msg' => 'Unauthorized'], 403);
        }

        $service->delete();

        return response()->json(['msg' => 'deleted']);
    }
}
