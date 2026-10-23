<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $store = $this->route('store');

        return $store !== null && (Auth::id() === $store->user_id);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'cover_image' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string|max:511',
        ];
    }
}
