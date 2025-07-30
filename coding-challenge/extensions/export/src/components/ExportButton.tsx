import React from 'react';
import { Button } from '@ohif/ui-next';
import { Icons } from '@ohif/ui-next'

const ExportButton = ({ onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      name="export"
    >
      <Icons.Download/>
    </Button>
  );
};

export default ExportButton;
