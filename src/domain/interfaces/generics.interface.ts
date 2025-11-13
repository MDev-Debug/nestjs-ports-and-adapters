export interface GenericServiceInterface<TCreateDto, TResponseDto, TUpdateDto> {
    create(createDto: TCreateDto): Promise<TCreateDto>;
    findAll(): Promise<TResponseDto[]>;
}
