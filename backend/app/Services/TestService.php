<?php

namespace App\Services;
use App\Models\Test_Model;

class TestService {
    public function getAllData(){
       // $model = new Test_Model();
        
        $tests = Test_Model::All();

        return $tests;
    }
}