export const signInWithCredentials = () => {
  try {
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message as string };
  }
};
