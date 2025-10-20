import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsPositive,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @IsPositive()
  @Type(() => Number)
  public price: number;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  public available?: boolean;
}
