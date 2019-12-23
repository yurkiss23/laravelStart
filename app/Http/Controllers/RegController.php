<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegController extends Controller
{
    public function index()
    {
        $test=10;

        return $test;
    }

    public function register(Request $request)
    {
        // echo $request;
        if($request->email=='admin@gmail.com'){
            return response()->json(['email'=>'Пошта вже існує'],400);
        }
    }
}
