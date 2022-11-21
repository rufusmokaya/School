<?php

namespace App\Services;
use App\Models\Student_Model;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\DB;

class StudentService {
    public function getAllData(){
        $students = Student_Model::All();
        return $students;
    }

    public function saveAllData(Request $request){
        $students = Student_Model::All();
        $query = DB::table('students')->insert([
            $students->first_name = $request->input('first_name'),
            $students->first_name = $request->input('first_name'),
            $students->middle_name = $request->input('middle_name'),
            $students->last_name = $request->input('last_name'),
            $students->dob = $request->input('dob'),
            $students->city = $request->input('city'),
            $students->city = $request->input('state'),
            $students->save(),
        ]);

    }
    
}