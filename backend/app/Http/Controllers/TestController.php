<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use App\Services\TestService;

class TestController extends Controller
{
    public function show($getTest)
    {
        return 'Hello world';
        
    }

    public function getTestData() {
        $service = new TestService();
        $tests = $service->getAllData();
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'data' => $tests

        ]);
    }
}
