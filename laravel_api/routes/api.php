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

Route::post('login', array('middleware' => 'cors', 'uses' => 'AuthController@login'));
Route::post('register', 'AuthController@register');
Route::get('users', array('middleware' => 'cors', 'uses' => 'AuthController@users'));

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group( function () {
	Route::resource('posts', 'PostController');
});
