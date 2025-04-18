import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { LoadingState } from "@/entities/review/ui";

export default function FeedDetailLoading() {
  return (
    <main className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="naver" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="naver">네이버 리뷰</TabsTrigger>
            <TabsTrigger value="kakao">카카오 리뷰</TabsTrigger>
          </TabsList>

          <TabsContent value="naver" className="mt-6">
            <LoadingState platform="naver" />
          </TabsContent>

          <TabsContent value="kakao" className="mt-6">
            <LoadingState platform="kakao" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
