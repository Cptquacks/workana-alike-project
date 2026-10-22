<?php

namespace App\Models;

use Database\Factories\StoreFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    /** @use HasFactory<StoreFactory> */
    use HasFactory;

    /**
     * @var array<string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'days_open',
        'open_time',
        'closing_time',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'user_id' => 'integer',
        'name' => 'string',
        'description' => 'string',
        'days_open' => 'array',
        'open_time' => 'datetime:H:i',
        'closing_time' => 'datetime:H:i',
        'rate' => 'decimal:2',
        'visibility' => 'decimal:2',
    ];

    /**
     * @var array<string, mixed>
     */
    protected $attributes = [
        'rate' => 0.0,
        'visibility' => 1.0,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function service(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
