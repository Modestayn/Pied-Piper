<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{path1}', function () {
    return view('welcome');
});

Route::get('/{path1}/{path2}', function () {
    return view('welcome');
});

Route::post('/register', [RegistrationController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::post('/catalog', [ProductController::class, 'showProductList']);




//Route::get('/{pathMatch}', function (){
//   return view('welcome');
//})->where('pathMatch', ".*");
