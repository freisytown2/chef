import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './views/HomeView';
import { CategoriesView } from './views/CategoriesView';
import { FavoritesView } from './views/FavoritesView';
import { MealPlannerView } from './views/MealPlannerView';
import { SettingsView } from './views/SettingsView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CookingModeModal } from './components/CookingModeModal';
import { PantrySearchModal } from './components/PantrySearchModal';
import { CustomRecipeModal } from './components/CustomRecipeModal';

const AppContent: React.FC = () => {
  const {
    activeTab,
    selectedRecipe,
    setSelectedRecipe,
    cookingRecipe,
    setCookingRecipe,
    isPantryModalOpen,
    setIsPantryModalOpen,
    isCustomRecipeModalOpen,
    setIsCustomRecipeModalOpen,
    addToHistory,
  } = useApp();

  // Whenever a recipe is opened, track it in the browsing history
  useEffect(() => {
    if (selectedRecipe?.id) {
      addToHistory(selectedRecipe.id);
    }
  }, [selectedRecipe]);

  // Register service worker on mount if supported
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.warn('Service Worker registration skipped:', err);
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 pt-4 pb-24">
        {activeTab === 'inicio' && <HomeView />}
        {activeTab === 'categorias' && <CategoriesView />}
        {activeTab === 'favoritos' && <FavoritesView />}
        {activeTab === 'planificador' && <MealPlannerView />}
        {activeTab === 'ajustes' && <SettingsView />}
      </main>

      {/* Fixed Bottom Touch Navigation Bar */}
      <BottomNav />

      {/* Global Modals */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {cookingRecipe && (
        <CookingModeModal
          recipe={cookingRecipe}
          onClose={() => setCookingRecipe(null)}
        />
      )}

      {isPantryModalOpen && (
        <PantrySearchModal onClose={() => setIsPantryModalOpen(false)} />
      )}

      {isCustomRecipeModalOpen && (
        <CustomRecipeModal onClose={() => setIsCustomRecipeModalOpen(false)} />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
