import { createContext, PropsWithChildren, useContext, useState } from 'react';

type View = 'collections' | 'notes' | 'labels';

type Context = {
  view: View;
  showLabels: boolean;
  closeShowLabelsModal: () => void;
  handleView: (view: View) => void;
};

export const DashboardContext = createContext<Context>(null as any);

export const DashboardProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [view, setView] = useState<View>('collections');
  const [showLabels, setShowLabels] = useState(false);

  const closeShowLabelsModal = () => setShowLabels(false);

  const handleView = (view: View) =>
    view === 'labels' ? setShowLabels(true) : setView(view);

  return (
    <DashboardContext.Provider
      value={{
        view,
        showLabels,
        closeShowLabelsModal,
        handleView,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
