<?php

use Illuminate\Support\Facades\Route;

// Catch-all de la SPA: sirve app.blade.php para cualquier ruta
// que no empiece por /api (esas las maneja routes/api.php)
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
