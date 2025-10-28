<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\DesignController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public product and category routes
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/designs/public', [DesignController::class, 'public']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    
    // User profile routes
    Route::get('/profile', [UserController::class, 'profile']);
    Route::put('/profile', [UserController::class, 'updateProfile']);
    Route::post('/profile/avatar', [UserController::class, 'uploadAvatar']);
    
    // Design routes
    Route::get('/designs', [DesignController::class, 'index']);
    Route::post('/designs', [DesignController::class, 'store']);
    Route::get('/designs/{id}', [DesignController::class, 'show']);
    Route::put('/designs/{id}', [DesignController::class, 'update']);
    Route::delete('/designs/{id}', [DesignController::class, 'destroy']);
    
    // Cart routes
    Route::get('/cart', [UserController::class, 'getCart']);
    Route::post('/cart', [UserController::class, 'addToCart']);
    Route::put('/cart/{id}', [UserController::class, 'updateCartItem']);
    Route::delete('/cart/{id}', [UserController::class, 'removeFromCart']);
    Route::delete('/cart', [UserController::class, 'clearCart']);
    
    // Wishlist routes
    Route::get('/wishlist', [UserController::class, 'getWishlist']);
    Route::post('/wishlist', [UserController::class, 'addToWishlist']);
    Route::delete('/wishlist/{id}', [UserController::class, 'removeFromWishlist']);
    
    // Order routes
    Route::get('/orders', [UserController::class, 'getOrders']);
    Route::post('/orders', [UserController::class, 'createOrder']);
    Route::get('/orders/{id}', [UserController::class, 'getOrder']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    // Category management
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
    
    // Product management
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    
    // Design management
    Route::get('/designs/pending', [DesignController::class, 'pending']);
    Route::put('/designs/{id}/approve', [DesignController::class, 'approve']);
    Route::put('/designs/{id}/reject', [DesignController::class, 'reject']);
});

