<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('cover_image')->nullable();
            $table->string('name');
            $table->string('description')->nullable();
            $table->arrenum('days_open')->nullable();
            $table->time('open_time')->nullable();
            $table->time('closing_time')->nullable();
            $table->decimal('rate', 10, 2)->default(0.0);
            $table->decimal('visibility', 10, 2)->default(1.0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stores');
    }
};
