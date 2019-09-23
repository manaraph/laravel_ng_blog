<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Validator;

class AuthController extends Controller
{

    /**
     * user api
     * 
     * @return \Illuminate\Http\Response
     */
    public function users()
    {
       return response()->json(['m4'=>'its working'], 200);
    }

    /**
     * login api
     * 
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')]))
        {
            $user = Auth::user();
            $success['token'] = $user->createToken('myApp')->accessToken;
            return response()->json(['success' => $success, 'message'=> 'Access granted'], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * register api
     * 
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        response()->json(['mdk'=> 'lsllsl'], 200);

        $validator = Validator::make(
            $request->all(), 
            [
                'name'=>'required', 
                'email'=>'required|email', 
                'password'=>'required', 
                'confirm_password'=>'required|same:password'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            $success['token'] = $user->createToken('myApp')->accessToken;
            $success['name'] = $user->name;
            return response()->json(['success'=>$success, 'message'=> 'User created successfully'], 200);
        
    }
}