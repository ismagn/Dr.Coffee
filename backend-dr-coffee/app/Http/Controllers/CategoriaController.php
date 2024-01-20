<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index(){
        return response()->json(['categorias' => Categoria::all()]);//entrega una rrespuesta de tipo json de las categorias (info del modelo Categoria)
    }
}
