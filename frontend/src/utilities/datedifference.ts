export const getTimeDifference = (timestamp:Date) => {
    const now = new Date();
    const timeDiff = Math.floor((now.getTime() - new Date(timestamp).getTime()) / 1000); // time difference in seconds
  
    if (timeDiff < 60) {
      return 'Lesser than 1 min ago';
    } else if (timeDiff < 3600) {
      const mins = Math.floor(timeDiff / 60);
      return `${mins} mins ago`;
    } else if (timeDiff < 86400) {
      const hours = Math.floor(timeDiff / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(timeDiff / 86400);
      return `${days} days ago`;
    }
  };
  