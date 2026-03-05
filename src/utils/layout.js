/**
 * TODO: Breakpoint del ejercicio
 * Recomendacion del curso: 768px para considerar 'tablet/pantalla ancha'
 */

export function getLayoutMode(width) {
    return width < 768 ? "tablet" : "mobile";
}