<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
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
        // 'image_url', 
        'location', 
        'online_url'
    ];
}
