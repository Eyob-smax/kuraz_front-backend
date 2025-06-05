const id = "https://eyoba.up.railway.app";

async function getTask() {
  try {
    const res = await fetch(`${id}/messages`);
    const result = await res.json();
    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }
    return result.messages;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function addTask(data) {
  const { username, message } = data;
  if (!username || !message) {
    return {
      success: false,
      message: "Incomplete data",
    };
  }
  try {
    const res = await fetch(`${id}/messages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const result = await res.json();
    if (!result.success) {
      return {
        message: result.message,
        success: false,
      };
    }
    return {
      success: result.success,
      result: "Message added to DB successfully!",
    };
  } catch (err) {
    console.log(err.message);
    return {
      message: err.message,
      success: false,
    };
  }
}

async function deleteTaskById(messageId) {
  !id ? "Incomplete data" : null;
  try {
    const res = await fetch(`${id}/delete-message/${messageId}`);
    const data = await res.json();
    if (!data.success) {
      return {
        message: data.message,
        success: data.success,
      };
    }

    return {
      message: data.message,
      success: data.success,
    };
  } catch (err) {
    return {
      message: err.message,
      success: false,
    };
  }
}

async function editTask(messageId, editedText) {
  try {
    const res = await fetch(`${id}/edit-message`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ messageId, editedText }),
    });

    const data = await res.json();
    if (!data.success) {
      return {
        message: data.message,
        success: data.success,
      };
    }

    return {
      message: data.message,
      success: data.success,
    };
  } catch (err) {
    return {
      message: err.message,
      success: false,
    };
  }
}

export { getTask, deleteTaskById, addTask, editTask };
