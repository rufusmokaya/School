<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student_Model extends Model
{
    protected $table = 'students';
    protected $fillable = [
        'id',
        'first_name', 
        'middle_name', 
        'last_name', 
        'dob',
        'city',
        'state',
    ];

}
