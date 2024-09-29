

export const findCategoryById = (categoryIds: string[], categories: { id: string; categoryName: string }[]): string[] => {
    return categoryIds.map(id => {
        const category = categories.find(cat => cat.id === id);
        return category ? category.categoryName : id; 
    });
};