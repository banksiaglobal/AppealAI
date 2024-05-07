

export const createErrorMessage(type: string): void {
    this.messageService.error(`The ${type} wasn't added. Try it again`, {
      nzDuration: 2000,
    });
  }

  export const createSuccessMessage(type: string): void {
    this.messageService.success(`The ${type} was added.`, {
      nzDuration: 2000,
    });
  }