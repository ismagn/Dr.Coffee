<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Pedido;
use Illuminate\Http\Request;
use App\Models\PedidoProducto;
use Illuminate\Support\Facades\Auth;

class PedidoController extends Controller
{
    //
    public function index()
    {
        return response()->json(['pedidos' => Pedido::with('user')->with('productos')->where('estado','=',0)->get()]);//el with() sirve para añadir otros datos extra de otros modelos a la consulta, en este caso el nombre del metodo de relacion que se creo en el modelo pedidos que consulta el usuario y el de productos que consulta los productos
    
    }

    public function store(Request $request)
    {
        $pedido = new Pedido();
        $pedido->user_id = Auth::user()->id;
        $pedido->total = $request->totalCarrito;//total es el mismo nombre que se puso en el metodo de axios coffeeprovider
        $pedido->save();

        $id = $pedido->id;

        $productos = $request->productos;
        //formatear un arreglo
        $pedido_producto = [];

        foreach ($productos as $i) {
            $pedido_producto[]=[
                'pedido_id'=>$id,
                'producto_id'=>$i['id'],
                'cantidad'=>$i['cantidad'],
                'created_at'=> Carbon::now(),
                'updated_at'=> Carbon::now(),
            ];
        }
        //almacenar en la BD
        PedidoProducto::insert($pedido_producto);//el insert se usa para insertar un arreglo a la base de datos
        return [
            'message' => 'pedido realizado correctamente'
        ];
    }
    
    public function show(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
        //se actualiza el campo estado del pedido
        $pedido->estado = 1;
        $pedido->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
        //
    }
}
