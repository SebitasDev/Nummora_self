import { Box } from "@mui/material";
import { Activity } from "../types/activity";
import { ActivityCard } from "../components/ActivityCard";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";

interface Props {
  activities: Activity[];
  total: number;
}

export const ActivityList = ({ activities, total }: Props) => {
  return (
    <CustomCard sx={{ p: 3 }}>
      <SectionHeader
        title={`Actividad (${activities.length})`}
        subtitle={`Mostrando ${activities.length} de ${total} actividades`}
      />

      <Box display="flex" flexDirection="column" gap={2} mt={3}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </Box>
    </CustomCard>
  );
};
