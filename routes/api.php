<?php

use App\Http\Controllers\StoreController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/authenticate', [UserController::class, 'authenticate']);
Route::post('/register', [UserController::class, 'store']);
Route::apiResource('/stores', StoreController::class)->only(['index', 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::apiResource('/users', UserController::class)->except(['store']);
    Route::apiResource('/stores', StoreController::class)->except(['index', 'show']);
});
