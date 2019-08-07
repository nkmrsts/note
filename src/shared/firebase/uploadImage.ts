import { storage } from 'firebase/app'

export const uploadImage = async (file: File) => {
  const fileName = file.name
  const ref = storage()
    .ref()
    .child(fileName)
  const snapshot = await ref.put(file)
  const downloadURL = await snapshot.ref.getDownloadURL()

  return downloadURL
}
