function readImageAsBlob(f: File) {
  return new Promise<string>((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(f);
  });
}

export default readImageAsBlob;
