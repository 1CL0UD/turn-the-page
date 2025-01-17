'use server';
export const signInWithCredentials = async () => {
  try {
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message as string };
  }
};

export const signUpWithCredentials = async () => {
  try {
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message as string };
  }
};
