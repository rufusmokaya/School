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
    
    public function saveStudenData(){
        echo 'hello world';
        exit();
        // $student_url ='http://localhost:8080/School/students/saveStudent';
        // $response = Http::get($student_url);
        // $students = json_decode($response->body());
        // echo "<pre>";
        // foreach($students as $post){
        //     $post =(array)$post;
        //     //print_r($post);
        //     Student_Model::updateOrCreate([
        //         ['Id' => $post['Id']],
        //         [
        //             'Id' => $post['Id'],
        //             'first_name' => $post['first_name'],
        //             'middle_name' => $post['middle_name'],
        //             'last_name' => $post['last_name'],
        //             'dob' => $post['dob'],
        //             'city' => $post['city'],
        //             'state' => $post['state'],
        //         ]
        //     ]);
        // }
        // dd('Data Stored');
        // die;


        // $service = new StudentService();
        // $students = $service->getAllData();
        // $validator=Validator::make($request->all(),[
        //     'first_name' => 'required',
        //     'middle_name' => 'required',
        //     'last_name' => 'required',
        //     'dob' => 'required',
        //     'city' => 'required',
        //     'state' => 'required'
        // ]);
        // if($validator->fails())
        // {
        //     $response=array('response' => $validator->messages(), 'success' => false);
        //     return $response;
        // }
        // else{
        //     $query = DB::table('students')->insert([
        //         $students->first_name = $request->input('first_name'),
        //         $students->first_name = $request->input('first_name'),
        //         $students->middle_name = $request->input('middle_name'),
        //         $students->last_name = $request->input('last_name'),
        //         $students->dob = $request->input('dob'),
        //         $students->city = $request->input('city'),
        //         $students->city = $request->input('state'),
        //         $students->save(),
        //     ]);

        //     // $students = new students_Model;
        //     $students->first_name = $request->input('first_name');
        //     $students->middle_name = $request->input('middle_name');
        //     $students->last_name = $request->input('last_name');
        //     $students->dob = $request->input('dob');
        //     $students->city = $request->input('city');
        //     $students->city = $request->input('state');
        //     // $students->save();
        //     // echo json_encode([
        //     //     'success' => true,
        //     //     'data' => $students
        //     // ]);
        // }

    }

    
}
