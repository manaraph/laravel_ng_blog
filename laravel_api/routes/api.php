<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::post('login', 'API\UserController@login');
// Route::post('register', 'API\UserController@register');
// Route::post('login', 'AuthController@login');

// Auth API
Route::post('login', array('middleware' => 'cors', 'uses' => 'API\AuthController@login'));
Route::post('register', 'API\AuthController@register');
Route::get('users', array('middleware' => 'cors', 'uses' => 'API\AuthController@users'));

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Post API
Route::get('posts', 'API\PostController@index');
Route::get('posts/{id}', 'API\PostController@show');
Route::post('posts', 'API\PostController@store');
Route::put('posts/{id}', 'API\PostController@update');
Route::delete('posts/{id}', 'API\PostController@delete');

// Route::middleware('auth:api')->group( function () {
// 	Route::resource('posts', 'PostController');
// });
