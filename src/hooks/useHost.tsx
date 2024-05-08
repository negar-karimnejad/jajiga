import useHosts from './useHosts';

const useHost = (id: number | undefined) => {
  const { hosts, loading } = useHosts();
  const host = hosts.find((host) => host.id === id);

  return { host, loading };
};

export { useHost };
