<?php

use Illuminate\Support\Facades\Route;

Route::get('/chart', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('chart');
});