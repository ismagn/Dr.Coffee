<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Console\View\Components\Warn;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return response()->json(['productos' =>Producto::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        //
        if ($request->newPrecio) {
            $producto->precio = $request->newPrecio;
            $producto->save();
            
        }else {
            if ($producto->disponible) {
                $producto->disponible = 0;
                $producto->save();
            } else {
                $producto->disponible = 1;
                $producto->save();
            }
        }
        return $request;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        //
    }
}
