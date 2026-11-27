constructor(private model: Model, private state: SharedState,​

  private errorHandler: ErrorHandler) { }​

  getProduct(key: ProductId): Product | undefined {​

    return this.model.getProduct(key);​

  }​

​

deleteProduct(key?: ProductId) {​

    if (key != undefined) {​

      this.model.deleteProduct(key).subscribe({​

                error: error => {​

                    console.error("Error deleting product", error);​

                    this.errorHandler.handleError(error);​

                }​

            });​

​

    }​

  }​
