type Props = {
  setImages: any;
  images: any;
};

const FileUpload = (props: Props) => {
  const handleUpload = (e: any) => {
    if (e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const filesData = files.map((file: any, i: number) => {
        return {
          id: i,
          file,
          url: URL.createObjectURL(file),
        };
      });
      props.setImages(filesData);
    }
  };

  return (
    <label
      className="flex w-full h-full justify-center items-center cursor-pointer"
      htmlFor="dropzone-file"
    >
      <div className="flex flex-col justify-center items-center h-[140px]">
        <p className="text-primary text-3xl font-bold">+</p>
        <p className="text">Add Images</p>
      </div>
      <input
        className="hidden"
        id="dropzone-file"
        type="file"
        multiple
        onChange={handleUpload}
        accept="jpg, jpeg, png, gif"
      />
    </label>
  );
};

export default FileUpload;
