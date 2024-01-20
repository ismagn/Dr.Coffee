<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => ['required', 'string'],
            'email' => ['required','email','unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                PasswordRules::min(8)->letters()->symbols()->numbers() //PasswordRules es una clase para el password que se importo para hacer validaciones

            ]
        ];
    }
    public function messages()
    {
        return [
            'name' => 'El nombre es obligatorio',
            'email' => 'El email es obligatorio',
            'email.email' => 'El email debe tener un formato correcto',
            'email.unique' => 'El usuario ya esta registrado',
            'password' => 'La contraseña debe contener 8 caracteres, una letra, un numero y un simbolo',

        ];
    }
}
