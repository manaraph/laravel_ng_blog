<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
// use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    // use LaratrustUserTrait;
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_name', 
        'date', 
        'time', 
        'price', 
        'image_url', 
        'location', 
        'online_url'
    ];
}
