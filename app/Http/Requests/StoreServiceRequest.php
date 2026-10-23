<?php

namespace App\Http\Requests;

use App\Models\Store;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $store = $this->route('store');

        return $store instanceof Store && ($this->user()?->id === $store->user_id);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:511',
            'cost' => 'required|decimal:0,2',
            'currency' => 'required|string|in:CUP,USD,ZELLE,USDT',
        ];
    }
}
