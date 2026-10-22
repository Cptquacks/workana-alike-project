<?php

namespace App\Models;

use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    /** @use HasFactory<ServiceFactory> */
    use HasFactory;

    /**
     * @var array<string>
     */
    protected $fillable = [
        'store_id',
        'name',
        'description',
        'cost',
        'currency',
        'available',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'store_id' => 'integer',
        'name' => 'string',
        'description' => 'string',
        'cost' => 'decimal:2',
        'currency' => 'string',
        'available' => 'boolean',
    ];

    /**
     * @var array<string, mixed>
     */
    protected $attributes = [
        'cost' => 0,
        'currency' => 'CUP',
        'available' => true,
    ];

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }
}
