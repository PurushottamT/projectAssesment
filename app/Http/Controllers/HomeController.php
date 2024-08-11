<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function welcomeUser()
    {
        return Inertia::render('WelcomeUser', [
            'name' => auth()->user()->name,
        ]);
    }

    public function welcomeAdmin()
    {
        return Inertia::render('WelcomeAdmin', [
            'name' => auth()->user()->name,
        ]);
    }
}
