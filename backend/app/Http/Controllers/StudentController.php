<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Services\StudentService;
use App\Http\Controllers\Controller;
use App\Models\Student_Model;

use Illuminate\Support\Facades\DB; 
use Illuminate\Support\Facades\Http; 

class StudentController extends Controller
{
    public function getStudentData() {
        $service = new StudentService();
        $students = $service->getAllData();
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'data' => $students
        ]);
    }
    
    public function saveStudentData(Request $request){  
        $validator=Validator::make($request->all(),[
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'dob' => 'required',
            'city' => 'required',
            'state' => 'required'
        ]);
        if($validator->fails())
        {
            $response=array('response' => $validator->messages(), 'success' => false);
            return $response;
        }
        else{
            $students = new Student_Model;
            $students->first_name = $request->input('first_name');
            $students->middle_name = $request->input('middle_name');
            $students->last_name = $request->input('last_name');
            $students->dob = $request->input('dob');
            $students->city = $request->input('city');
            $students->state = $request->input('state');
            $students->save();
            echo json_encode([
                'success' => true,
                'data' => $students
            ]);
        }
    }  
}
