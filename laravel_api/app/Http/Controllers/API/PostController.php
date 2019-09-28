<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Post;
use Validator;

class PostController extends BaseController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $posts = Post::all();

    return $this->sendResponse($posts->toArray(), 'Posts retrieved successfully.');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $input = $request->all();

    $validator = Validator::make($input, [
      'post_name' => 'required',
      'date' => 'required', 
      'time' => 'required', 
      'price' => 'required', 
      // 'image_url' => 'nullable|string', 
      'location' => 'nullable|string', 
      'online_url' => 'nullable|string'
    ]);

    if($validator->fails()){
      return $this->sendError('Validation Error.', $validator->errors());       
    }

    $post = Post::create($input);

    return $this->sendResponse($post->toArray(), 'Post created successfully.');
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $post = Post::find($id);

    if (is_null($post)) {
      return $this->sendError('Post not found.');
    }

    return $this->sendResponse($post->toArray(), 'Post retrieved successfully.');
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Post $post)
  {
    $input = $request->all();

    $validator = Validator::make($input, [
      'post_name' => 'required',
      'date' => 'required', 
      'time' => 'required', 
      'price' => 'required', 
      // 'image_url' => 'nullable|string', 
      'location' => 'nullable|string', 
      'online_url' => 'nullable|string'
    ]);

    if($validator->fails()){
        return $this->sendError('Validation Error.', $validator->errors());       
    }

    $post->post_name = $input['post_name'];
    $post->date = $input['date'];
    $post->time = $input['time'];
    $post->price = $input['price']; 
    // $post->image_url = $input['image_url']; 
    $post->location = $input['location'];
    $post->online_url = $input['online_url'];    
    $post->save();

    return $this->sendResponse($post->toArray(), 'Post updated successfully.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Post $post)
  {
    $post->delete();

    return $this->sendResponse($post->toArray(), 'Post deleted successfully.');
  }
}
