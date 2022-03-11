import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommonDialog from '../../components/CommonDialog';
import CommonTextField from '../../components/CommonTextField';
import { selectSelectedProject } from '../proj/projectSlice';
import CommonTooltip from '../../components/CommonTooltip';
import { fetchAsyncRegisterTaskCategory } from '../proj/projectSlice';

type Props = {
  open: boolean;
  setOpen: (oepn: boolean) => void;
};

const TaskCategoryDialog = (props: Props) => {
  const styles = {
    icon: css`
      margin-left: 4px;
      margin-top: 12px;
    `,
  };

  const dispatch = useDispatch();
  const selectedProject = useSelector(selectSelectedProject);
  const [editedCategory, setEditedCategory] = useState(
    selectedProject.task_category
  );

  const [addedCategory, setAddedCategory] = useState('');

  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    const data = {
      task_category_name: addedCategory,
      project_id: selectedProject.project_id,
    };
    dispatch(fetchAsyncRegisterTaskCategory(''));
  };

  const handleEditClick = () => {};

  const handleDeleteClick = () => {};

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <CommonDialog
      open={props.open}
      onClose={handleClose}
      title='カテゴリを編集'
      mode='display'
      maxWidth='xs'
    >
      <>
        <Stack direction='row' justifyContent='flex-start'>
          <CommonTextField name='' value={addedCategory} width='240px' />
          <Box css={styles.icon}>
            <CommonTooltip title='追加'>
              <IconButton aria-label='delete task' onClick={handleAddClick}>
                <AddIcon />
              </IconButton>
            </CommonTooltip>
          </Box>
        </Stack>
        {editedCategory?.map((cat) => (
          <Stack direction='row' justifyContent='flex-start'>
            <CommonTextField
              name={cat.task_category_id}
              value={cat.task_category_name}
              width='240px'
            />
            <Box css={styles.icon}>
              <CommonTooltip title='保存'>
                <IconButton aria-label='edit task' onClick={handleEditClick}>
                  <CheckIcon color='success' />
                </IconButton>
              </CommonTooltip>
            </Box>
            <Box css={styles.icon}>
              <CommonTooltip title='編集'>
                <IconButton aria-label='edit task' onClick={handleEditClick}>
                  <EditIcon />
                </IconButton>
              </CommonTooltip>
            </Box>
            <Box css={styles.icon}>
              <CommonTooltip title='削除'>
                <IconButton
                  aria-label='delete task'
                  onClick={handleDeleteClick}
                >
                  <DeleteIcon />
                </IconButton>
              </CommonTooltip>
            </Box>
          </Stack>
        ))}
      </>
    </CommonDialog>
  );
};

export default TaskCategoryDialog;