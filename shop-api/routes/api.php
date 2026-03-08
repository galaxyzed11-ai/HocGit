<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

Route::get('/products', [ProductController::class, 'index']);
Route::post('/orders', [OrderController::class, 'store']);

