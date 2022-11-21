<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test_Model extends Model
{
    protected $table = 'test';

    public function getAllData(){
        $data = [];

        $data[] = [
            'id'=> 6,
            'name' => 'rufus',
            'value' => '1er'
        ];
        return $data;
    }
}
