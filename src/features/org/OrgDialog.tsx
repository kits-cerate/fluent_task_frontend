import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonTextField from '../../components/CommonTextField';
import CommonDialog from '../../components/CommonDialog';
import { TARGET } from '../types';
import {
  selectOrgDialogOpen,
  selectEditedOrgName,
  setOrgDialogOpen,
  setEditedOrgName,
  fetchAsyncUpdateOrgInfo,
} from '../org/orgSliece';

const OrgDialog = () => {
  const dispatch = useDispatch();
  const orgDialogOpen = useSelector(selectOrgDialogOpen);
  const editedOrgName = useSelector(selectEditedOrgName);

  const handleClose = () => {
    dispatch(setOrgDialogOpen(false));
  };

  const handleInputChange = (target: TARGET) => {
    dispatch(setEditedOrgName(target.value));
  };

  const handleEdit = () => {
    dispatch(fetchAsyncUpdateOrgInfo(editedOrgName));
    dispatch(setOrgDialogOpen(false));
  };

  return (
    <CommonDialog
      open={orgDialogOpen}
      title="グループを編集"
      onClose={handleClose}
      onEdit={handleEdit}
      maxWidth="xs"
      mode="edit"
    >
      <CommonTextField
        label="グループ名"
        name="org_name"
        value={editedOrgName}
        onChange={handleInputChange}
        width="100%"
      />
    </CommonDialog>
  );
};

export default OrgDialog;
