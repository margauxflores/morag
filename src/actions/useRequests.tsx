import { useSuspenseQuery } from '@tanstack/react-query';

interface Filters {
  vessel: number;
  fiscalYear: string;
  quarter: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const dynamic = 'force-dynamic';

export const useGeneral = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['general'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/general`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const useLifeOnboard = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['life_onboard'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/life-onboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const useOnboardEquipment = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['onboard_equipment'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-equipment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const useOnboardNetwork = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['onboard_network'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-network`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const useOnboardResearchSupport = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['onboard_research_support'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-research-support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const useOnboardSafety = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['onboard_safety'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-safety`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};

export const usePreciseSupport = (filters: Filters) => {
  return useSuspenseQuery({
    queryKey: ['precruise_support'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/precruise-support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
};
